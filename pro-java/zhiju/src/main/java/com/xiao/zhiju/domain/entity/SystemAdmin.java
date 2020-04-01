package com.xiao.zhiju.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//系统管理员信息
@Entity
@Table(name = "SystemAdmin")
public class SystemAdmin {
    public String AdminId;
    public String AdminName;
    public String AdminPassword;
    public String AdminPhone;
    public String AdminEmail;

    public  SystemAdmin(){

    }
    public  SystemAdmin(String AdminId ,String AdminName ,String AdminPassword, String AdminPhone ,String AdminEmail){
       this.AdminId=AdminId;
       this.AdminName=AdminName;
       this.AdminPassword=AdminPassword;
       this.AdminPhone=AdminPhone;
       this.AdminEmail=AdminEmail;
    }

    @Column(name = "AdminId")
    @Id
    public String getAdminId(){
        return AdminId;
    }
    public void setAdminId(String AdminId){
        this.AdminId=AdminId;
    }

    @Column(name = "AdminName")
    public String getAdminName(){
        return AdminName;
    }
    public void setAdminName(String AdminName){
        this.AdminName=AdminName;
    }

    @Column(name = "AdminPassword")
    public String getAdminPassword(){
        return AdminPassword;
    }
    public void setAdminPassword(String AdminPassword){
        this.AdminPassword=AdminPassword;
    }

    @Column(name = "AdminPhone")
    public String getAdminPhone(){
        return AdminPhone;
    }
    public void setAdminPhone(String AdminPhone){
        this.AdminPhone=AdminPhone;
    }

    @Column(name = "AdminEmail")
    public String getAdminEmail(){
        return AdminEmail;
    }
    public void setAdminEmail(String AdminEmail){
        this.AdminEmail=AdminEmail;
    }


}
