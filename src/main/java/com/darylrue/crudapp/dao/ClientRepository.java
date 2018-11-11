package com.darylrue.crudapp.dao;

import com.darylrue.crudapp.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {

}
