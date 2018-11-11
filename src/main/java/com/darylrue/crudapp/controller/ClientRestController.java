package com.darylrue.crudapp.controller;

import com.darylrue.crudapp.domain.Client;
import com.darylrue.crudapp.service.ClientService;
import com.darylrue.crudapp.util.Confirmation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/client")
public class ClientRestController {

    private ClientService clientService;

    public ClientRestController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("/list")
    public List<Client> getList() {
        return clientService.listClients();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getClient(@PathVariable("id") int id) {
        if(clientService.exists(id)) {
            Client client = clientService.readClient(id);
            return new ResponseEntity<>(client, HttpStatus.OK);
        }
        Confirmation confirmation = new Confirmation(false, "Client not found.");
        return new ResponseEntity<>(confirmation, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping("/create")
    public ResponseEntity<Confirmation> createClient(@RequestBody @Valid Client client) {
        Integer id = clientService.createClient(client);
        Confirmation confirmation = new Confirmation(true,
                "New Client created. The generated companyId is: " + id);
        return new ResponseEntity<>(confirmation, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<Confirmation> editClient(@RequestBody @Valid Client client) {
        Confirmation confirmation = clientService.updateClient(client);
        if(confirmation.success) {
            return new ResponseEntity<>(confirmation, HttpStatus.OK);
        }
        return new ResponseEntity<>(confirmation, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Object> deleteClient(@PathVariable("id") int id) {
        Confirmation confirmation = clientService.deleteClient(id);
        if(confirmation.success) return new ResponseEntity<>(HttpStatus.OK);
        return new ResponseEntity<>(confirmation.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
