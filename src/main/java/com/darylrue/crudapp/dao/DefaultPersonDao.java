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
import com.darylrue.crudapp.util.Confirmation;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

/**
 * Spring JDBC implementation of {@link PersonDao}.
 */
@Component
public class DefaultPersonDao implements PersonDao {

    private PersonRepository personRepository;

    public DefaultPersonDao(PersonRepository personRepository) {
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
     * @return the Person object
     */
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

    /**
     *
     * @param person the values to save
     * @return the generated Integer id of the persisted person object or null
     */
    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer createPerson(Person person) {
        Person persistedPerson = personRepository.save(person);
        if(persistedPerson == null) return null;
        return persistedPerson.getPersonId();
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public boolean exists(Integer personId) {
        return personRepository.existsById(personId);
    }

}
