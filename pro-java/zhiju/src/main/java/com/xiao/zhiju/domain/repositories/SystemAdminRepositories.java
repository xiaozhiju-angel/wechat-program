package com.xiao.zhiju.domain.repositories;

import com.xiao.zhiju.domain.entity.BorrowRecords;
import com.xiao.zhiju.domain.entity.SystemAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SystemAdminRepositories extends JpaRepository<SystemAdmin,Integer> {
}
