package com.darylrue.crudapp.service;

import com.darylrue.crudapp.domain.Person;
import com.darylrue.crudapp.dto.PersonDto;

public interface PersonDtoService {

    Person toPerson(PersonDto personDto);
    PersonDto toDto(Person person);

}
