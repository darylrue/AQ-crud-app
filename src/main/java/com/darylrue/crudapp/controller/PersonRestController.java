package com.darylrue.crudapp.controller;

import com.darylrue.crudapp.service.PersonService;
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

    private PersonService personService;

    public PersonRestController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/list")
    public List<Person> getList() {
        return personService.listPeople();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getPerson(@PathVariable("id") int id) {
        if(personService.exists(id)) {
            Person person = personService.readPerson(id);
            return new ResponseEntity<>(person, HttpStatus.OK);
        }
        Confirmation confirmation = new Confirmation(false, "Person not found.");
        return new ResponseEntity<>(confirmation, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping("/create")
    public ResponseEntity<Confirmation> createPerson(@RequestBody @Valid Person person) {
        Integer id = personService.createPerson(person);
        Confirmation confirmation = new Confirmation(true,
                    "New Person created. The generated personId is: " + id);
        return new ResponseEntity<>(confirmation, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<Confirmation> editPerson(@RequestBody @Valid Person person) {
        Confirmation confirmation = personService.updatePerson(person);
        if(confirmation.success) {
            return new ResponseEntity<>(confirmation, HttpStatus.OK);
        }
        return new ResponseEntity<>(confirmation, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Object> deletePerson(@PathVariable("id") int id) {
        Confirmation confirmation = personService.deletePerson(id);
        if(confirmation.success) return new ResponseEntity<>(HttpStatus.OK);
        return new ResponseEntity<>(confirmation.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
