package com.darylrue.crudapp.service;

import com.darylrue.crudapp.domain.Client;
import com.darylrue.crudapp.util.Confirmation;

import java.util.List;

/**
 * Operations on the "client" table.
 */
public interface ClientService {

    /**
     * Retrieves all of the client records.
     *
     * @return list of client records
     */
    List<Client> listClients();

    /**
     * Creates a new client record.
     *
     * @param client the values to save
     * @return the new company ID
     */
    Integer createClient(Client client);

    /**
     * Retrieves a client record by ID.
     *
     * @param id the company ID
     * @return the client record
     */
    Client readClient(Integer id);

    /**
     * Updates an existing client record.
     *
     * @param client the Client object to be updated
     * @return a Confirmation object (Confirmation.success : boolean, Confirmation.message : String)
     */
    Confirmation updateClient(Client client);

    /**
     * Deletes a client record by ID.
     *
     * @param id the company ID
     * @return a Confirmation object (Confirmation.success : boolean, Confirmation.message : String)
     */
    Confirmation deleteClient(Integer id);

    /**
     *
     * @param id the company ID
     * @return true if there is a record in the database with the given ID, false otherwise
     */
    boolean exists(Integer id);
}
