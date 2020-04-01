package com.xiao.zhiju.domain.repositories;

import com.xiao.zhiju.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositories extends JpaRepository<User,Integer> {
}
