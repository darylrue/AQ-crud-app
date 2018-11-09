package com.darylrue.crudapp.controller;

import com.darylrue.crudapp.dao.PersonRepository;
import com.darylrue.crudapp.domain.Person;
import org.omg.CosNaming.NamingContextPackage.NotFound;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/person")
public class PersonRestController {

    private PersonRepository personRepository;

    public PersonRestController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping("/list")
    public List<Person> getList() {
        return personRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getPerson(@PathVariable("id") long id) {
        if(personRepository.existsById(id)) {
            Person person = personRepository.getOne(id);
            return new ResponseEntity<>(person, HttpStatus.OK);
        }
        return new ResponseEntity<>("Person not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createPerson(@RequestBody Person person) {
        //TODO - validate person
        personRepository.saveAndFlush(person);

        //TODO - temp for testing
        return new ResponseEntity<>("You just created a new person." +
                "\n id: " + person.getPersonId() +
                "\n firstName: " + person.getFirstName() +
                "\n lastName: " + person.getLastName() +
                "\n emailAddress: " + person.getEmailAddress() +
                "\n streetAddress: " + person.getStreetAddress() +
                "\n city: " + person.getCity() +
                "\n state: " + person.getState() +
                "\n zipCode: " + person.getZipCode(), HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<String> editPerson(@RequestBody Person person) {
        //TODO - validate person
        //make sure person exists in the database
        if(personRepository.existsById(person.getPersonId())) {
            person = personRepository.save(person);

            //TODO - temp for testing
            return new ResponseEntity<>("You just edited a person." +
                    "\n id: " + person.getPersonId() +
                    "\n firstName: " + person.getFirstName() +
                    "\n lastName: " + person.getLastName() +
                    "\n emailAddress: " + person.getEmailAddress() +
                    "\n streetAddress: " + person.getStreetAddress() +
                    "\n city: " + person.getCity() +
                    "\n state: " + person.getState() +
                    "\n zipCode: " + person.getZipCode(), HttpStatus.OK);
        }
        return new ResponseEntity<>("Person not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> deletePerson(@PathVariable("id") long id) {
        if(personRepository.existsById(id)) {
            personRepository.deleteById(id);

            //TODO temp
            return new ResponseEntity<>("You just deleted the person with id: " + id, HttpStatus.OK);
        }
        return new ResponseEntity<>("Id not found", HttpStatus.NOT_FOUND);
    }

}
