package com.darylrue.crudapp.dao;

import com.darylrue.crudapp.domain.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Integer> {

}
