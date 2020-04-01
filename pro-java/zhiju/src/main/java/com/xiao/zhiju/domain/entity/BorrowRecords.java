package com.xiao.zhiju.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

//借阅记录表：BorrowRecords
@Entity
@Table(name = "BorrowRecords")
public class BorrowRecords implements Serializable {
    public Integer BorrowId;//借阅记录ID订单号是图书馆给我们的不是我们自己拥有的
    public String UserId;//用户ID
    public String BookId;//图书ID
    public String BookName;//书名
    public Date BorrowTime;//借书时间
    public Date ShouldTime;//应还书时间
    public Date ReturnTime;//实际还书时间
    public Integer State;//借阅状态（0借出;1已还）
    public  BorrowRecords(){

    }
    public  BorrowRecords(Integer BorrowID ,String UserId, String BookId ,String BookName, Date BorrowTime, Date ShouldTime, Date ReturnTime, Integer State){
      this.BorrowId=BorrowID;
      this.UserId=UserId;
      this.BookId=BookId;
      this.BookName=BookName;
      this.BorrowTime=BorrowTime;
      this.ShouldTime=ShouldTime;
      this.ReturnTime=ReturnTime;
      this.State=State;
    }
    @Column(name = "BorrowId")
    @Id
    public Integer getBorrowId(){
        return BorrowId;
    }
    public void setBorrowId(Integer BorrowId){
        this.BorrowId=BorrowId;
    }
    @Column(name = "UserId")
    public String getUserId(){
        return UserId;
    }
    public void setUserId(String UserId){
        this.UserId=UserId;
    }
    @Column(name = "BookId")
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
    @Column(name = "BorrowTime")
    public  Date getBorrowTime(){
        return  BorrowTime;
    }
    public void setBorrowTime(Date BorrowTime){
        this.BorrowTime=BorrowTime;
    }
    @Column(name = "ShouldTime")
    public  Date getShouldTime(){
        return  ShouldTime;
    }
    public void setShouldTime(Date ShouldTime){
        this.ShouldTime=ShouldTime;
    }
    @Column(name = "ReturnTime")
    public  Date getReturnTime(){
        return  ReturnTime;
    }
    public void setReturnTime(Date ReturnTime){
        this.ReturnTime=ReturnTime;
    }
    @Column(name = "State")
    public Integer getState(){
        return State;
    }
    public void setState(int State){
        this.State=State;
    }
}
