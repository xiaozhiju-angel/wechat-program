package com.xiao.zhiju.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//图书管理员信息
@Entity
@Table(name = "BookAdmin")
public class BookAdmin {
    public String AdId;
    public String AdName;
    public String AdPassword;
    public String AdPhone;
    public String AdEmail;

    public BookAdmin(){

    }
    public BookAdmin(String AdId ,String AdName ,String AdPassword, String AdPhone, String AdEmail){
        this.AdId=AdId;
        this.AdName=AdName;
        this.AdPassword=AdPassword;
        this.AdPhone=AdPhone;
        this.AdEmail=AdEmail;
    }
    @Column(name = "AdId")
    @Id
    public String getAdId(){
        return AdId;
    }
    public void setAdId(String AdId){
        this.AdId=AdId;
    }
    @Column(name = "AdName")
    public String getAdName(){
        return AdName;
    }
    public void setAdName(String AdName){
        this.AdName=AdName;
    }
    @Column(name = "AdPassword")
    public String getAdPassword(){
        return AdPassword;
    }
    public void setAdPassword(String AdPassword){
        this.AdPassword=AdPassword;
    }

    @Column(name = "AdPhone")
    public String getAdPhone(){
        return AdPhone;
    }
    public void setAdPhone(String AdPhone){
        this.AdPhone=AdPhone;
    }

    @Column(name = "AdEmail")
    public String getAdEmail(){
        return AdEmail;
    }
    public void setAdEmail(String AdEmail){
        this.AdEmail=AdEmail;
    }
}
