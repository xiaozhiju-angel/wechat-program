package com.xiao.zhiju;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;

/**
 * Create by zhangpe0312@qq.com on 2018/6/5.
 */
@Configuration
public class TomcatStart extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(BookserviceApplication.class);
    }

}
