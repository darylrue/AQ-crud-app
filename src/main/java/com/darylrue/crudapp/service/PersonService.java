package com.darylrue.crudapp.service;

import com.darylrue.crudapp.domain.Person;
import com.darylrue.crudapp.dto.PersonDto;
import com.darylrue.crudapp.util.Confirmation;

import java.util.List;

/**
 * Operations on the "person" table.
 */
public interface PersonService {

    /**
     * Retrieves all of the person records.
     *
     * @return list of person record DTOs
     */
    List<PersonDto> listPeople();

    /**
     * Creates a new person record.
     *
     * @param personDto the values to save
     * @return the new person ID
     */
    Integer createPerson(PersonDto personDto);

    /**
     * Retrieves a person record by ID.
     *
     * @param id the person ID
     * @return the person record DTO
     */
    PersonDto readPerson(Integer id);

    /**
     * Updates an existing person record.
     *
     * @param personDto the Person object to be updated by the DTO
     * @return a Confirmation object (Confirmation.success : boolean, Confirmation.message : String)
     */
    Confirmation updatePerson(PersonDto personDto);

    /**
     * Deletes a person record by ID.
     *
     * @param id the person ID
     * @return a Confirmation object (Confirmation.success : boolean, Confirmation.message : String)
     */
    Confirmation deletePerson(Integer id);

    /**
     *
     * @param id the person ID
     * @return true if there is a record in the database with the given ID, false otherwise
     */
    boolean exists(Integer id);
}
