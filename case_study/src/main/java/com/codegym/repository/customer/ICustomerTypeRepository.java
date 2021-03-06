package com.codegym.repository.customer;

import com.codegym.model.customer.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ICustomerTypeRepository extends JpaRepository<CustomerType,Integer> {
}
