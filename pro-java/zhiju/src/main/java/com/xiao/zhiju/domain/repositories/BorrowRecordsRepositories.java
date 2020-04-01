package com.xiao.zhiju.domain.repositories;

import com.xiao.zhiju.domain.entity.BookInfo;
import com.xiao.zhiju.domain.entity.BorrowRecords;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowRecordsRepositories extends JpaRepository<BorrowRecords,Integer> {
}
