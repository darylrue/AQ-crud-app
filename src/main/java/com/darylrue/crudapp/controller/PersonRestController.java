package com.darylrue.crudapp.controller;

import com.darylrue.crudapp.dao.PersonDao;
import com.darylrue.crudapp.domain.Person;
import com.darylrue.crudapp.util.Confirmation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
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
        if(personDao.exists(id)) {
            Person person = personDao.readPerson(id);
            return new ResponseEntity<>(person, HttpStatus.OK);
        }
        return new ResponseEntity<>("Person not found", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createPerson(@RequestBody @Valid Person person) {
        Integer id = personDao.createPerson(person);
        if(id != null) {
            return new ResponseEntity<>("New Person created. The generated personId is: " +
                    id, HttpStatus.OK);
        }
        return new ResponseEntity<>("Error creating person.", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PutMapping("/edit")
    public ResponseEntity<String> editPerson(@RequestBody @Valid Person person) {
        Confirmation confirmation = personDao.updatePerson(person);
        if(confirmation.success) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(confirmation.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deletePerson(@PathVariable("id") int id) {
        Confirmation confirmation = personDao.deletePerson(id);
        if(confirmation.success) return new ResponseEntity<>(HttpStatus.OK);
        return new ResponseEntity<>(confirmation.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
