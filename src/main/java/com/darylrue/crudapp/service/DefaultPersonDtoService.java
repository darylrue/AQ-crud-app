package com.darylrue.crudapp.service;

import com.darylrue.crudapp.domain.Person;
import com.darylrue.crudapp.dto.PersonDto;
import org.springframework.stereotype.Component;


@Component
public class DefaultPersonDtoService implements PersonDtoService {

    private ClientService clientService;

    public DefaultPersonDtoService(ClientService clientService) {
        this.clientService = clientService;
    }

    @Override
    public Person toPerson(PersonDto personDto) {
        Person person = new Person();
        person.setPersonId(personDto.getPersonId());
        person.setFirstName(personDto.getFirstName());
        person.setLastName(personDto.getLastName());
        person.setEmailAddress(personDto.getEmailAddress());
        person.setStreetAddress(personDto.getStreetAddress());
        person.setCity(personDto.getCity());
        person.setState(personDto.getState());
        person.setZipCode(personDto.getZipCode());
        person.setClient(personDto.getClient());
        //set client contacts (they are not in the DTO)
        if(person.getClient() != null) {
            person.setClient(clientService.readClient(person.getClient().getCompanyId()));
        }
        return person;
    }

    @Override
    public PersonDto toDto(Person person) {
        PersonDto personDto = new PersonDto();
        personDto.setPersonId(person.getPersonId());
        personDto.setFirstName(person.getFirstName());
        personDto.setLastName(person.getLastName());
        personDto.setEmailAddress(person.getEmailAddress());
        personDto.setStreetAddress(person.getStreetAddress());
        personDto.setCity(person.getCity());
        personDto.setState(person.getState());
        personDto.setZipCode(person.getZipCode());
        personDto.setClient(person.getClient());
        if(personDto.getClient() != null) personDto.getClient().setContacts(null);
        return personDto;
    }

}
