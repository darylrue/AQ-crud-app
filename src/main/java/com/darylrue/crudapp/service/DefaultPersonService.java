package com.darylrue.crudapp.service;

import com.darylrue.crudapp.dao.PersonRepository;
import com.darylrue.crudapp.domain.Person;
import com.darylrue.crudapp.util.Confirmation;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

/**
 * Spring JPA implementation of {@link PersonService}.
 */
@Component
public class DefaultPersonService implements PersonService {

    private PersonRepository personRepository;

    public DefaultPersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public List<Person> listPeople() {
        return personRepository.findAll();
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public Person readPerson(Integer personId) {
        return personRepository.getOne(personId);
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
    public Confirmation updatePerson(Person person) {
        Integer id = person.getPersonId();
        if(id == null) return new Confirmation(false, "Id cannot be null.");
        if(personRepository.existsById(id)) {
            personRepository.save(person);
            return new Confirmation(true);
        }
        return new Confirmation(false, "Person not found.");
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer createPerson(Person person) {
        Person persistedPerson = personRepository.save(person);
        return persistedPerson.getPersonId();
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public boolean exists(Integer personId) {
        return personRepository.existsById(personId);
    }

}
