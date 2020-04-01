package com.xiao.zhiju.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

//图书信息
@Entity
@Table(name = "BookInfo")
public class BookInfo {
    public String BookId;
    public String BookName;
    public String Author;
    public String Translator;//译者
    public float Price;
    public String ISBNCode;//ISBN编码
    public Date ComeUpTime;//出版日期
    public String PublishCompany;//出版社
    public Integer State;//图书状态（0借出;1在库）
    public String EnteringMen;//入库者
    public Date EnteringDate;//入库日期
    public BookInfo(){

    }
    public BookInfo(String BookId, String BookName, String Author ,String Translator, float Price, String ISBNCode, Date ComeUpTime, String PublishCompany , Integer State , String EnteringMen, Date EnteringDate){
          this.BookId=BookId;
          this.BookName=BookName;
          this.Author=Author;
          this.Translator=Translator;
          this.Price=Price;
          this.ISBNCode=ISBNCode;
          this.ComeUpTime=ComeUpTime;
          this.PublishCompany=PublishCompany;
          this.State=State;
          this.EnteringMen=EnteringMen;
          this.EnteringDate=EnteringDate;
    }
    @Column(name = "BookId")
    @Id
    public String getBookId(){
        return BookId;
    }
    public void setBookId(String BookId){
        this.BookId=BookId;
    }
    @Column(name = "BookName")
    public String getBookName(){
        return BookName;
    }
    public void setBookName(String BookName){
        this.BookName=BookName;
    }
    @Column(name = "Author")
    public String getAuthor(){
        return Author;
    }
    public void setAuthor(String Author){
        this.Author=Author;
    }
    @Column(name = "Translator")
    public String getTranslator(){
        return Translator;
    }
    public void setTranslator(String Translator){
        this.Translator=Translator;
    }
    @Column(name = "Price")
    public float getPrice(){
        return Price;
    }
    public void setPrice(float Price){
        this.Price=Price;
    }
    @Column(name = "ISBNCode")
    public String getISBNCode(){
        return ISBNCode;
    }
    public void setISBNCode(String ISBNCode){
        this.ISBNCode=ISBNCode;
    }
    @Column(name = "ComeUpTime")
    public Date getComeUpTime(){
        return ComeUpTime;
    }
    public void setComeUpTime(Date ComeUpTime){
        this.ComeUpTime=ComeUpTime;
    }
    @Column(name = "PublishCompany")
    public String getPublishCompany(){
        return PublishCompany;
    }
    public void setPublishCompany(String PublishCompany){
        this.PublishCompany=PublishCompany;
    }
    @Column(name = "State")
    public Integer getState(){
        return State;
    }
    public void setState(int State){
        this.State=State;
    }
    @Column(name = "EnteringMen")
    public String getEnteringMen(){
        return EnteringMen;
    }
    public void setEnteringMen(String EnteringMen){
        this.EnteringMen=EnteringMen;
    }
    @Column(name = "EnteringDate")
    public Date getEnteringDate(){
        return  EnteringDate;
    }
    public void setEnteringDate(Date  EnteringDate){
        this. EnteringDate= EnteringDate;
    }

}
