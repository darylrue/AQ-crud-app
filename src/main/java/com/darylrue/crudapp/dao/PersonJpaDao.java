package com.darylrue.crudapp.dao;
//
//import com.darylrue.crudapp.dao.PersonDao;
//import com.darylrue.crudapp.domain.Person;
//import org.springframework.jdbc.core.RowMapper;
//import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
//import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
//import org.springframework.jdbc.support.GeneratedKeyHolder;
//import org.springframework.jdbc.support.KeyHolder;
//import org.springframework.transaction.annotation.Propagation;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.util.Collections;
//import java.util.List;
//

import com.darylrue.crudapp.dao.PersonDao;
import com.darylrue.crudapp.domain.Person;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

/**
 * Spring JDBC implementation of {@link PersonDao}.
 */
@Component
public class PersonJpaDao implements PersonDao {

    private PersonRepository personRepository;

    public PersonJpaDao(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public List<Person> listPeople() {
        return personRepository.findAll();
    }

    /**
     *
     * @param personId
     * @return the Person object, or null if personId is not found
     */
    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public Person readPerson(Integer personId) {
        if(personRepository.existsById(personId))
            return personRepository.getOne(personId);
        return null;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = false)
    public void deletePerson(Integer personId) {
        personRepository.deleteById(personId);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = false)
    public void updatePerson(Person person) {
        if(personRepository.existsById(person.getPersonId()))
            personRepository.save(person);
    }

    /**
     *
     * @param person the values to save
     * @return the generated Integer id of the persisted person object
     */
    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = false)
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
