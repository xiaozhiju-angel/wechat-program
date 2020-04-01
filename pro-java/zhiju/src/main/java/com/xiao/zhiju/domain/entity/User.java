package com.xiao.zhiju.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//用户表
@Entity
@Table(name = "user")
public class User {
    public String UserId;
    public String UserName;
    public String Password;
    public  User(){
    }

    public  User(String UserId,String UserName,String Password){
        this.UserId=UserId;
        this.UserName=UserName;
        this.Password=Password;
    }
    @Column(name = "UserId")
    @Id
    public String getUserId(){
        return UserId;
    }
    public void setUserId(String UserId){
        this.UserId=UserId;
    }
    @Column(name = "UserName")
    public String getUserName(){
        return UserName;
    }
    public void setUserName(String UserName){
        this.UserName=UserName;
    }
    @Column(name = "Password")
    public String getPassword(){
        return Password;
    }
    public void setPassword(String Password){
        this.Password=Password;
    }
}
