package com.familytree.familytree.Dao;

import com.familytree.familytree.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonDao extends JpaRepository<Person,Long> {

}
