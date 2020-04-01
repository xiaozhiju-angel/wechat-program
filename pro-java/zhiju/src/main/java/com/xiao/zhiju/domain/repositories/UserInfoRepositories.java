package com.xiao.zhiju.domain.repositories;

import com.xiao.zhiju.domain.entity.BookInfo;
import com.xiao.zhiju.domain.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepositories extends JpaRepository<UserInfo,String> {
}
