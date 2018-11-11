package com.darylrue.crudapp.service;

import com.darylrue.crudapp.dao.ClientRepository;
import com.darylrue.crudapp.domain.Client;
import com.darylrue.crudapp.util.Confirmation;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

/**
 * Spring JPA implementation of {@link ClientService}.
 */
@Component
public class DefaultClientService implements ClientService {

    private ClientRepository clientRepository;

    public DefaultClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public List<Client> listClients() {
        return clientRepository.findAll();
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public Client readClient(Integer companyId) {
        return clientRepository.getOne(companyId);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Confirmation deleteClient(Integer companyId) {
        if(clientRepository.existsById(companyId)) {
            clientRepository.deleteById(companyId);
            return new Confirmation(true);
        }
        return new Confirmation(false, "Id not found.");
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Confirmation updateClient(Client client) {
        Integer id = client.getCompanyId();
        if(id == null) return new Confirmation(false, "Id cannot be null.");
        if(clientRepository.existsById(id)) {
            clientRepository.save(client);
            return new Confirmation(true);
        }
        return new Confirmation(false, "Client not found.");
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer createClient(Client client) {
        Client persistedClient = clientRepository.save(client);
        return persistedClient.getCompanyId();
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public boolean exists(Integer companyId) {
        return clientRepository.existsById(companyId);
    }

}

