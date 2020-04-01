package com.xiao.zhiju;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableJpaRepositories("com.xiao.zhiju.domain.repositories")
@ComponentScan(basePackages = "com.xiao.zhiju")
@EntityScan("com.xiao.zhiju.domain.entity")
@EnableTransactionManagement //启动事务管
public class BookserviceApplication {

    @Bean
    public OpenEntityManagerInViewFilter openEntityManagerInViewFilter() {
        return new OpenEntityManagerInViewFilter();
    }


    public static void main(String[] args) {
        SpringApplication.run(BookserviceApplication.class, args);
    }
}
