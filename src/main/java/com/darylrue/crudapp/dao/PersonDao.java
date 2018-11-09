package com.darylrue.crudapp.dao;

import com.darylrue.crudapp.domain.Person;
import com.darylrue.crudapp.util.Confirmation;

import java.util.List;

/**
 * Operations on the "person" table.
 */
public interface PersonDao {

    /**
     * Retrieves all of the person records.
     *
     * @return list of person records
     */
    List<Person> listPeople();

    /**
     * Creates a new person record.
     *
     * @param person the values to save
     * @return the new person ID
     */
    Integer createPerson(Person person);

    /**
     * Retrieves a person record by ID.
     *
     * @param id the person ID
     * @return the person record
     */
    Person readPerson(Integer id);

    /**
     * Updates an existing person record.
     *
     * @param person the Person object to be updated
     * @return a Confirmation object (Confirmation.success : boolean, Confirmation.message : String)
     */
    Confirmation updatePerson(Person person);

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
