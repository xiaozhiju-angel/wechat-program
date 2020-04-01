package com.xiao.zhiju.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//用户信息表
@Entity
@Table(name = "UserInfo")
public class UserInfo {
    public String UserId;//借阅号、学号
    public String Departments;//院系
    public String Major;//专业
    public String  Phone;
    public String Email;
    public Integer Max;//hai可借数量
    public Integer Time;//可借期限
    public Integer LendedNum;//在借数量
    public UserInfo(){}
    public UserInfo(String UserId,String Departments,String Major,String  Phone,String Email,Integer Max,Integer Time,Integer LendedNum){
        this.UserId=UserId;
        this.Departments=Departments;
        this.Major=Major;
        this.Phone=Phone;
        this.Email=Email;
        this.Max=Max;
        this.Time=Time;
        this.LendedNum=LendedNum;
    }
    @Column(name = "UserId")
    @Id
    public String getUserId(){
        return UserId;
    }
    public void setUserId(String UserId){
        this.UserId=UserId;
    }
    @Column(name = "Departments")
    public String getDepartments(){
        return Departments;
    }
    public void setDepartments(String Departments){
        this.Departments=Departments;
    }
    @Column(name = "Major")
    public String getMajor(){
        return Major;
    }
    public void setMajor(String Major){
        this.Major=Major;
    }
    @Column(name = "Phone")
    public String getPhone(){
        return Phone;
    }
    public void setPhone(String Phone){
        this.Phone=Phone;
    }
    @Column(name = "Email")
    public String getEmail(){
        return Email;
    }
    public void setEmail(String Email){
        this.Email=Email;
    }
    @Column(name = "Max")
    public Integer getMax(){
        return Max;
    }
    public void setMax(Integer Max){
        this.Max=Max;
    }
    @Column(name = "Time")
    public Integer getTime(){
        return Time;
    }
    public void setTime(Integer Time){
        this.Time=Time;
    }
    @Column(name = "LendedNum")
    public Integer getLendedNum(){
        return LendedNum;
    }
    public void setLendedNum(Integer LendedNum){
        this.LendedNum=LendedNum;
    }
}
