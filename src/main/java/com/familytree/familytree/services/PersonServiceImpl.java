package com.familytree.familytree.services;

import com.familytree.familytree.Dao.PersonDao;
import com.familytree.familytree.entities.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService{

//    @PersistenceContext
//    private EntityManager em;

    @Autowired
    private PersonDao personDao;

    @Override
    public List<Person> findAllCustomers() {
        return personDao.findAll();
    }

    @Override
    public String addPerson(Person family) {
        List<Person> customers = personDao.findAll();
        if(CollectionUtils.isEmpty(customers)) {
            personDao.save(family);
            return "Customer Successfully Added";
        }
        Person j = customers.stream().filter(r -> r.getName().equals(family.getName())).findFirst().orElse(null);
        if(j == null) {
            personDao.save(family);
            return "Customer Successfully Added";
        }else{
            return "Customer Already Exists";
        }}

    @Override
    public void deletePerson(String id) {
//		List<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.person.id = :id ", Customer.class).setParameter("id",Long.valueOf(id)).getResultList();
//
//		for(Customer customer:q){
//			customer.setPerson(null);
//		}
        personDao.findById(Long.valueOf(id)).map(person->{
            personDao.delete(person);
            return null;
        });
    }

    @Override
    public String updateCustomer(String id,Person person) {
        Person per = personDao.findById(Long.valueOf(id)).orElse(null);
        assert per != null;
        per.setName(person.getName());
        personDao.save(per);
        return "Customer has been updated successfully";
    }
}
