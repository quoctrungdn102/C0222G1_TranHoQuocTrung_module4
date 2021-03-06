package com.codegym.service.contract;

import com.codegym.model.contract.AttachFacility;
import com.codegym.model.contract.Contract;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IContractService {
    public Page<Contract> displayContract(Pageable pageable);

    public List<AttachFacility> displayAttachFacility();

    Contract findContractById(Integer id);


}
