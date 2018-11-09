package com.darylrue.crudapp.controller;

import com.darylrue.crudapp.dao.PersonDao;
import com.darylrue.crudapp.domain.Person;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/person")
public class PersonRestController {

    private PersonDao personDao;

    public PersonRestController(PersonDao personDao) {
        this.personDao = personDao;
    }

    @GetMapping("/list")
    public List<Person> getList() {
        return personDao.listPeople();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getPerson(@PathVariable("id") int id) {
        Person person = personDao.readPerson(id);
        if(person != null) {
            return new ResponseEntity<>(person, HttpStatus.OK);
        }
        return new ResponseEntity<>("Person not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createPerson(@RequestBody Person person) {
        //TODO - validate person
        int id = personDao.createPerson(person);
        return new ResponseEntity<>("New Person created. The generated personId is: " +
                id, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<String> editPerson(@RequestBody Person person) {
        //TODO - validate person
        //make sure person exists in the database
        if(personDao.exists(person.getPersonId())) {
            personDao.updatePerson(person);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>("Person not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletePerson(@PathVariable("id") int id) {
        personDao.deletePerson(id);
    }

}
