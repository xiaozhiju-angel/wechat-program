package com.xiao.zhiju.domain.repositories;

import com.xiao.zhiju.domain.entity.BookInfo;
import org.hibernate.annotations.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * extends JpaRepository<BookInfo,Integer>
 */
public interface BookInfoRepositories extends JpaRepository<BookInfo,String> {

    /**
     *
     *   save(存一个对象)  增加
     *   saveFlush() 修改
     *   delete()
     *   findBy**
     *
     */

    public BookInfo findByBookId(String bookId);

}
