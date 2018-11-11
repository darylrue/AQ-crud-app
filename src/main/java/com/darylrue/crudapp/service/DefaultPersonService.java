package com.darylrue.crudapp.service;

import com.darylrue.crudapp.dao.ClientRepository;
import com.darylrue.crudapp.dao.PersonRepository;
import com.darylrue.crudapp.domain.Person;
import com.darylrue.crudapp.dto.PersonDto;
import com.darylrue.crudapp.util.Confirmation;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Spring JPA implementation of {@link PersonService}.
 */
@Component
public class DefaultPersonService implements PersonService {

    private PersonRepository personRepository;
    private PersonDtoService personDtoService;
    private ClientService clientService;

    public DefaultPersonService(PersonRepository personRepository,
                                PersonDtoService personDtoService,
                                ClientService clientService) {
        this.personRepository = personRepository;
        this.personDtoService = personDtoService;
        this.clientService = clientService;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public List<PersonDto> listPeople() {
        List<Person> personList = personRepository.findAll();
        List<PersonDto> personDtoList = new ArrayList<>();
        for(Person person : personList) {
            personDtoList.add(personDtoService.toDto(person));
        }
        return personDtoList;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public PersonDto readPerson(Integer personId) {
        Person person = personRepository.getOne(personId);
        return personDtoService.toDto(person);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Confirmation deletePerson(Integer personId) {
        if(personRepository.existsById(personId)) {
            personRepository.deleteById(personId);
            return new Confirmation(true);
        }
        return new Confirmation(false, "Id not found.");
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Confirmation updatePerson(PersonDto personDto) {
        Integer id = personDto.getPersonId();
        if(id == null) return new Confirmation(false, "Id cannot be null.");
        if(personRepository.existsById(id)) {
            Person person = personDtoService.toPerson(personDto);
            personRepository.save(person);
            return new Confirmation(true);
        }
        return new Confirmation(false, "Person not found.");
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer createPerson(PersonDto personDto) {
        //if the new person has a client, make sure the client exists
        if(personDto.getClient() != null && clientService.exists(personDto.getClient().getCompanyId())) {
            Person persistedPerson = personRepository.save(personDtoService.toPerson(personDto));
            return persistedPerson.getPersonId();
        }
        return -1;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public boolean exists(Integer personId) {
        return personRepository.existsById(personId);
    }

}
