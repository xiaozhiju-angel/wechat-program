package com.xiao.zhiju.domain.controller;
import com.xiao.zhiju.domain.entity.*;
import com.xiao.zhiju.domain.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.expression.Lists;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.logging.SimpleFormatter;

@RestController
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private BookInfoRepositories bookInfoRepositories;
    @Autowired
    private UserInfoRepositories userInfoRepositories;
    @Autowired
    private BorrowRecordsRepositories borrowRecordsRepositories;
    @Autowired
    private SystemAdminRepositories systemAdminRepositories;
    @Autowired
    private BookAdminRepositories bookAdminRepositories;
    @Autowired
    private UserRepositories userRepositories;
//    /**
//     * @RequestParam("username")String userName,
//     *                                     @RequestParam("password")String password,
//     *                                     @RequestParam("type") String type
//     * @return
//     */


//    @GetMapping(value = "/login")
//    public Map<String,Object> login( ){
//        Map<String,Object> map = new HashMap<>();
//        map.put("code",0);
//        map.put("msg","操作成功");
//        return  map;
//    }

    public synchronized static final String getMD5Str(String str, String charSet) { //md5加密
        MessageDigest messageDigest = null;
        try {
            messageDigest = MessageDigest.getInstance("MD5");
            messageDigest.reset();
            if (charSet == null) {
                messageDigest.update(str.getBytes());
            } else {
                messageDigest.update(str.getBytes(charSet));
            }
        } catch (NoSuchAlgorithmException e) {
            System.out.println("md5 error:" + e.getMessage());
        } catch (UnsupportedEncodingException e) {
            System.out.println("md5 error:" + e.getMessage());
        }

        byte[] byteArray = messageDigest.digest();
        StringBuffer md5StrBuff = new StringBuffer();
        for (int i = 0; i < byteArray.length; i++) {
            if (Integer.toHexString(0xFF & byteArray[i]).length() == 1)
                md5StrBuff.append("0").append(Integer.toHexString(0xFF & byteArray[i]));
            else
                md5StrBuff.append(Integer.toHexString(0xFF & byteArray[i]));
        }
        return md5StrBuff.toString();
    }

    @GetMapping(value = "/login")
    public Map<String, Object> login(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("type") String type) {
        Map<String, Object> map = new HashMap<>();
        if (type.equals("1")) {
            for (int i = 0; i < this.userRepositories.findAll().size(); i++) {
                if (this.userRepositories.findAll().get(i).getUserId().equals(username) && getMD5Str(this.userRepositories.findAll().get(i).getPassword(), null).equals(password)) {
                    map.put("data1", true);
                    map.put("name", this.userRepositories.findAll().get(i).getUserName());
                    map.put("u", this.userRepositories.findAll().get(i).getUserId());

                }
            }
        } else if (type.equals("2")) {
            for (int i = 0; i < this.bookAdminRepositories.findAll().size(); i++) {
                if (this.bookAdminRepositories.findAll().get(i).getAdId().equals(username) && getMD5Str(this.bookAdminRepositories.findAll().get(i).getAdPassword(), null).equals(password)) {
                    map.put("data2", true);
                }
            }
        } else if (type.equals("3")) {
            for (int i = 0; i < this.systemAdminRepositories.findAll().size(); i++) {
                if (this.systemAdminRepositories.findAll().get(i).getAdminId().equals(username) && getMD5Str(this.systemAdminRepositories.findAll().get(i).getAdminPassword(), null).equals(password)) {
                    map.put("data3", true);
                }
            }
        }
        return map;
    }

    @GetMapping(value = "/register")
    public Map<String, Object> register(@RequestParam("user") String user,
                                        @RequestParam("name") String name,
                                        @RequestParam("identi") String identi,
                                        @RequestParam("tel") String tel,
                                        @RequestParam("pass") String pass,
                                        @RequestParam("pass_again") String pass_again,
                                        @RequestParam("emaile") String emaile) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
        for (int i = 0; i < this.userRepositories.findAll().size(); i++) {
            if (this.userRepositories.findAll().get(i).getUserId().equals(user)) {
                map.put("success", false);
            }
        }
        String s = "";
        if (user != s && name != s && identi != s && tel != s && pass != s && pass.equals(pass_again)) {
            User u = new User();
            u.setUserId(user);
            u.setUserName(name);
            u.setPassword(pass);
            this.userRepositories.save(u);
            map.put("success", true);
        }
        return map;
    }

    //基本资料
    @GetMapping(value = "/fundamental")
    public Map<String, Object> register(@RequestParam("userid") String userid) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
//
//        List<UserInfo> list =  userInfoRepositories.findAll();
//        map.put("list", list);

        for (int i = 0; i < this.userInfoRepositories.findAll().size(); i++) {
            if (this.userInfoRepositories.findAll().get(i).getUserId().equals(userid)) {
                List<UserInfo> list = new ArrayList<>();
                map.put("id", this.userInfoRepositories.findAll().get(i).getUserId());
                map.put("depart", this.userInfoRepositories.findAll().get(i).getDepartments());
                map.put("prof", this.userInfoRepositories.findAll().get(i).getMajor());
                map.put("tel", this.userInfoRepositories.findAll().get(i).getPhone());
                map.put("emaile", this.userInfoRepositories.findAll().get(i).getEmail());
                map.put("max", this.userInfoRepositories.findAll().get(i).getMax());
                map.put("date", this.userInfoRepositories.findAll().get(i).getTime());
                map.put("num", this.userInfoRepositories.findAll().get(i).getLendedNum());
            }
        }
        return map;
    }


    //修改资料
    @GetMapping(value = "/changeinfo")
    public Map<String, Object> changeinfo(@RequestParam("tel") String tel,
                                          @RequestParam("emaile") String emaile,
                                          @RequestParam("userid") String userid) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
        List<UserInfo> list = userInfoRepositories.findAll();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getUserId().equals(userid)) {
                try {
                    UserInfo userInfo = new UserInfo();
                    userInfo.setUserId(list.get(i).getUserId());
                    userInfo.setDepartments(list.get(i).getDepartments());
                    userInfo.setPhone(tel);
                    userInfo.setLendedNum(list.get(i).getLendedNum());
                    userInfo.setEmail(emaile);
                    userInfo.setMajor(list.get(i).getMajor());
                    userInfo.setMax(list.get(i).getMax());
                    userInfo.setTime(list.get(i).getTime());
                    this.userInfoRepositories.saveAndFlush(userInfo);
                    map.put("success", true);
                    return map;
                } catch (Exception e) {
                    e.printStackTrace();
                    map.put("success", false);
                }
            }
        }
        return map;

    }

    //修改密码
    @GetMapping(value = "/changepass")
    public Map<String, Object> changepass(@RequestParam("userid") String userid,
                                          @RequestParam("id") String id,
                                          @RequestParam("newpass") String newpass,
                                          @RequestParam("againpass") String againpass) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
        List<User> list = userRepositories.findAll();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getUserId().equals(userid) && list.get(i).getPassword().equals(id) && newpass.equals(againpass)) {
                try {
                    User user = new User();
                    user.setUserId(list.get(i).getUserId());
                    user.setUserName(list.get(i).getUserName());
                    user.setPassword(newpass);
                    this.userRepositories.saveAndFlush(user);
                    map.put("success", true);
                    return map;
                } catch (Exception e) {
                    e.printStackTrace();
                    map.put("success", false);
                }
            }
        }
        return map;

    }

    //在借图书
    @GetMapping(value = "/bookinfonow")
    public Map<String, Object> bookinfonow(@RequestParam("userid") String userid) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
//        List<UserInfo> list =  userInfoRepositories.findAll();
//        map.put("list", list);
        List<BorrowRecords> list = borrowRecordsRepositories.findAll();
        List<BorrowRecords> target = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getUserId().equals(userid) && list.get(i).getState() == 0) {
                target.add(list.get(i));
            }
        }
        map.put("list", target);
        return map;
    }


    //借阅记录
    @GetMapping(value = "/borrowrecord")
    public Map<String, Object> borrowrecord(@RequestParam("userid") String userid) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
//        List<UserInfo> list =  userInfoRepositories.findAll();
//        map.put("list", list);
        List<BorrowRecords> list = borrowRecordsRepositories.findAll();
        List<BorrowRecords> target = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getUserId().equals(userid)) {
                target.add(list.get(i));
            }
        }
        map.put("list", target);
        return map;
    }

    //搜书
    @GetMapping(value = "/searchBook")
    public Map<String, Object> searchBook(@RequestParam("book") String book) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
        List<BookInfo> m = bookInfoRepositories.findAll();
        List<BookInfo> list = new ArrayList<>();
        for (int i = 0; i < m.size(); i++) {
            if (m.get(i).getBookName().indexOf(book) != -1) {
                list.add(m.get(i));
            }
        }
        map.put("list", list);
        return map;
    }

    //读者借书
    //借书模块
    @GetMapping(value = "/readerborrow")
    public Map<String, Object> readerborrow(@RequestParam("borrowid") String borr, @RequestParam("name") String name, @RequestParam("bookid") String bookid) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
        List<BookInfo> book = bookInfoRepositories.findAll();
        List<UserInfo> user = userInfoRepositories.findAll();
        List<BorrowRecords> borrow = borrowRecordsRepositories.findAll();
        List<BorrowRecords> Fb = new ArrayList<>();
        List<BorrowRecords> Fu = new ArrayList<>();
        List<BorrowRecords> Fc = new ArrayList<>();
        int nb=0;
        int nu=0;
        BookInfo bookInfo = new BookInfo();
        BorrowRecords borrowRecords = new BorrowRecords();
        int Fbook=0;
        int Fuser=0;
        int Fborrow=0;
        for (int k = 0; k < borrow.size(); k++){
            if(!borrow.get(k).getBorrowId().equals(Integer.parseInt(borr))){
                Fborrow=1;
            }
        }
        for (int i = 0; i < book.size(); i++){
            if(book.get(i).getBookId().equals(bookid)){
                if(book.get(i).getState()==1){
                    Fbook=1;
                    Fb.add(borrow.get(i));
                    nb=i;
                    break;
                }
            }
        }
        for(int j=0;j<user.size();j++){
            if(user.get(j).getUserId().equals(name)){
                Fuser=1;
                Fu.add(borrow.get(j));
                nu=j;
                break;
            }
        }
        if(Fbook==1&&Fuser==1&&Fborrow==1){
            book.get(nb).setState(0);
            borrowRecords.setBorrowId(Integer.parseInt(borr));
            borrowRecords.setBookName(book.get(nb).getBookName() );
            borrowRecords.setState(0);
            borrowRecords.setBookId(bookid);
            borrowRecords.setUserId(name);
            borrowRecords.setBorrowTime(new Date());
            borrowRecords.setShouldTime(new Date());
            borrowRecords.setReturnTime(new Date());
            borrowRecords.setBookId(bookid);
            try{
                this.borrowRecordsRepositories.save(borrowRecords);
            }catch (Exception e){
                e.printStackTrace();
            }
            Fc.add(borrowRecords);
            map.put("list",Fc);
        }


//        if (bookid == null || "".equals(bookid)) {
//            map.put("success", false);
//            return map;
//        }

        return map;
    }


//还书模块
    @GetMapping(value ="/bookback")
    public Map<String, Object> bookback(@RequestParam("borrow") String borrow) {
        Map<String, Object> map = new HashMap<>();
        try{
            List<BookInfo> book = bookInfoRepositories.findAll();
            List<UserInfo> user = userInfoRepositories.findAll();
            List<BorrowRecords> borrowRecords= borrowRecordsRepositories.findAll();

        int m=Integer.parseInt(borrow);
        int F=0;
        int n=0;
        for (int i = 0; i < borrowRecords.size(); i++) {
            if (borrowRecords.get(i).getBorrowId()==m&&borrowRecords.get(i).getState()==0) {
                F=1;
                n=i;
            }
        }
        if(F==1){
            //book.get(n).setState(1);

            BookInfo bookInfo = bookInfoRepositories.findByBookId(borrowRecords.get(n).getBookId());
            bookInfo.setState(1);
            this.bookInfoRepositories.saveAndFlush(bookInfo);
            this.borrowRecordsRepositories.deleteById(Integer.valueOf(borrow));
            this.bookInfoRepositories.saveAndFlush(bookInfo);
            map.put("success",true);
            return map;
        }else
            map.put("success",false);
        }catch (Exception e){
            e.printStackTrace();
        }
        return map;
}
//系统管理员模块
//查询读者信息
@GetMapping(value = "/searchusers")
public Map<String, Object> searchusers(@RequestParam("userid") String userid ) {
    Map<String, Object> map = new HashMap<>();
    //针对学生，普通用户
//        List<UserInfo> list =  userInfoRepositories.findAll();
//        map.put("list", list);
    List<User> list =userRepositories.findAll();
    List<User> target = new ArrayList<>();
    for(int i=0;i<list.size();i++){
        if(list.get(i).getUserId().equals(userid)){
            target.add(list.get(i));
        }
    }
    map.put("list",target);
    return map;
}
/*public Map<String, Object> searchusers(@RequestParam("userid") String userid ) {
    Map<String, Object> map = new HashMap<>();
    //针对学生，普通用户
//        List<UserInfo> list =  userInfoRepositories.findAll();
//        map.put("list", list);
    List<UserInfo> list =userInfoRepositories.findAll();
    List<UserInfo> target = new ArrayList<>();
    for(int i=0;i<list.size();i++){
        if(list.get(i).getUserId().equals(userid)){
            target.add(list.get(i));
        }
    }
    map.put("list",target);
    return map;
}*/

    //查询管理员信息
    @GetMapping(value = "/searchadmins")
    public Map<String, Object> searchadmins(@RequestParam("adminid") String adminid ) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
//        List<UserInfo> list =  userInfoRepositories.findAll();
//        map.put("list", list);
        List<BookAdmin> bookadmin =bookAdminRepositories.findAll();
        List<SystemAdmin> systemadmin =systemAdminRepositories.findAll();
        List<SystemAdmin> target_systemadmin = new ArrayList<>();
        List<BookAdmin>  target_bookadmin = new ArrayList<>();
        int F_bookadmin=0;
        int F_systemadmin=0;
        for(int i=0;i<bookadmin.size();i++){
            if(bookadmin.get(i).getAdId().equals(adminid)){
                target_bookadmin.add(bookadmin.get(i));
                F_bookadmin=1;
            }
        }
        for(int i=0;i<systemadmin.size();i++){
            if(systemadmin.get(i).getAdminId().equals(adminid)){
                target_systemadmin.add(systemadmin.get(i));
                F_systemadmin=1;
            }
        }
        if(F_bookadmin==1){
            map.put("list",target_bookadmin);
            map.put("bookadmin",true);
            return map;
        }
        if(F_systemadmin==1){
            map.put("list",target_systemadmin);
            map.put("systemadmin",true);
            return map;
        }
        return map;
    }


    //查询系统管理员信息
    @GetMapping(value = "/searchsystemadmins")
    public Map<String, Object> searchsystemadmins(@RequestParam("adminid") String adminid ) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
//        List<UserInfo> list =  userInfoRepositories.findAll();
//        map.put("list", list);
        List<SystemAdmin> list =systemAdminRepositories.findAll();
        List<SystemAdmin> target = new ArrayList<>();
        for(int i=0;i<list.size();i++){
            if(list.get(i).getAdminId().equals(adminid)){
                target.add(list.get(i));
            }
        }
        map.put("list",target);
        return map;
    }
    //查询权限
    @GetMapping(value = "/power")
    public Map<String, Object> power_user(@RequestParam("power") String power ) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
//        List<UserInfo> list =  userInfoRepositories.findAll();
//        map.put("list", list);
        List<User> user =userRepositories.findAll();
        List<BookAdmin> bookadmin =bookAdminRepositories.findAll();
        for(int i=0;i<user.size();i++){
            if(user.get(i).getUserId().equals(power)){
                map.put("success",true);
                return map;
            }
        }
        for(int i=0;i<bookadmin.size();i++){
            if(bookadmin.get(i).getAdId().equals(power)){
                map.put("bookadmin",true);
                return map;
            }
        }
        return map;
    }

//添加新读者用户
@GetMapping(value = "/newusers")
public Map<String, Object> newuser(@RequestParam("userid") String userid,
                                    @RequestParam("username") String username,
                                    @RequestParam("password") String password,
                                    @RequestParam("againpassword") String againpassword) {
    Map<String, Object> map = new HashMap<>();
    //针对学生，普通用户
    int F=0;
    List<User> list = userRepositories.findAll();
    for (int i = 0; i < list.size(); i++) {
        if (list.get(i).getUserId().equals(userid)) {
            map.put("success", false);
            F=1;
            return map;
        }
    }
    if (userid == null || "".equals(userid)){
        map.put("success",false);
        return map;
    }

    try {
        if(password.equals(againpassword)){
            User user= new User();
            user.setUserId(userid);
            user.setUserName(username);
            user.setPassword(password);
            this.userRepositories.save(user);
            map.put("success", true);
            return map;
        }
    } catch (Exception e) {
        e.printStackTrace();
        map.put("success", false);
    }
    return map;
}
//添加新图书管理员
@GetMapping(value = "/newadmins")
public Map<String, Object> newadmin(@RequestParam("adminid") String adminid,
                                   @RequestParam("adminname") String adminname,
                                  @RequestParam("adminpassword") String adminpassword,
                                  @RequestParam("againadminpassword") String againadminpassword,
                                  @RequestParam("admintel") String admintel,
                                  @RequestParam("adminemaile") String adminemaile) {
    Map<String, Object> map = new HashMap<>();
    //针对学生，普通用户
    int F=0;
    List<BookAdmin> list = bookAdminRepositories.findAll();
    for (int i = 0; i < list.size(); i++) {
        if (list.get(i).getAdId().equals(adminid)) {
            map.put("success", false);
            F=1;
            return map;
        }
    }
//        if (adminid == null || "".equals(adminid)){
//            map.put("success",false);
//            return map;
//        }

    try {
        if(adminpassword.equals(againadminpassword)){
            BookAdmin admin = new BookAdmin();
            admin.setAdId(adminid);
            admin.setAdName(adminname);
            admin.setAdPassword(adminpassword);
            admin.setAdPhone(admintel);
            admin.setAdEmail(adminemaile);
           this.bookAdminRepositories.save(admin);
            map.put("success", true);
            return map;
        }
    } catch (Exception e) {
        e.printStackTrace();
        map.put("success", false);
    }
    return map;
}


    //新书入库
    @GetMapping(value = "/newbookIn")
    public Map<String, Object> bookin(@RequestParam("bookid") String bookid,
                                      @RequestParam("bookname") String bookname,
                                      @RequestParam("bookauthor") String bookauthor,
                                      @RequestParam("booktranslator") String booktranslator,
                                      @RequestParam("price") String price,
                                      @RequestParam("code") String code,
                                      @RequestParam("publishplace") String publishplace,
                                      @RequestParam("publishtime") String publishtime,
                                      @RequestParam("inmysqler") String inmysqler,
                                      @RequestParam("publishtime") String inmysqlertime,
                                      @RequestParam("inmysqler") String state) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
        int F=0;
        List<BookInfo> list = bookInfoRepositories.findAll();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getBookId().equals(bookid)) {
                map.put("success", false);
                F=1;
                return map;
            }
        }
//        if (bookid == null || "".equals(bookid)){
//            map.put("success",false);
//            return map;
//        }
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date date1 = null;
        Date date2 = null;
        try {
            date1 = format.parse(publishtime);
            date2 = format.parse(inmysqlertime);
            BookInfo book = new BookInfo();
            book.setBookId(bookid);
            book.setBookName(bookname);
            book.setAuthor(bookauthor);
            book.setTranslator(booktranslator);
            book.setPrice(Float.valueOf(price));
            book.setISBNCode(code);
            book.setPublishCompany(publishplace);
            book.setComeUpTime(date1);
            book.setEnteringMen(inmysqler);
            book.setEnteringDate(date2);
            book.setState(Integer.valueOf(state));
            this.bookInfoRepositories.save(book);
            System.out.print(book);
            map.put("success", true);
            return map;
        } catch (Exception e) {
            e.printStackTrace();
            map.put("success", false);
        }
        return map;
    }

    //图书出库
    @GetMapping(value = "/bookout")
    public Map<String, Object> bookout(@RequestParam("bookid") String bookid,
                                       @RequestParam("bookname") String bookname,
                                       @RequestParam("bookauthor") String bookauthor,
                                       @RequestParam("booktranslator") String booktranslator,
                                       @RequestParam("price") String price,
                                       @RequestParam("code") String code,
                                       @RequestParam("publishplace") String publishplace,
                                       @RequestParam("publishtime") String publishtime,
                                       @RequestParam("inmysqler") String inmysqler) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
        /*
        for(int i=0;i<list.size();i++) {
            if (list.get(i).getBookId().equals(bookid)) {
                try {
                      this.bookInfoRepositories.deleteById(bookid);
                      map.put("success", true);
                   } catch (Exception e) {
                          e.printStackTrace();
                      map.put("success", false);
              }
        return map;
            }
        }*/

        if (bookid == null || "".equals(bookid)) {
            map.put("success", false);
            return map;
        }
        try {
            this.bookInfoRepositories.deleteById(bookid);
            map.put("success", true);
            return map;
        } catch (Exception e) {
            e.printStackTrace();
            map.put("success", false);
        }
        return map;
    }

    //    public boolean userLogin(int UserId,String Password){
//        this.userRepositories.findById(UserId);
//        for(int i=0;i<this.userRepositories.findAll().size();i++){
//            if(this.userRepositories.findAll().get(i).getUserId().equals(UserId)&&this.userRepositories.findAll().get(i).getPassword().equals(Password)){
//                return true;
//            }
//        }
//        return false;
//    }
  //修改图书信息
    @GetMapping(value = "/changebookinfo")
    public Map<String, Object> changebookinfo(@RequestParam("bookid") String bookid,
                                      @RequestParam("bookname") String bookname,
                                      @RequestParam("bookauthor") String bookauthor,
                                      @RequestParam("booktranslator") String booktranslator,
                                      @RequestParam("price") String price,
                                      @RequestParam("code") String code,
                                      @RequestParam("publishplace") String publishplace,
                                      @RequestParam("publishtime") String publishtime,
                                      @RequestParam("inmysqler") String inmysqler,
                                      @RequestParam("publishtime") String inmysqlertime,
                                      @RequestParam("state") String state) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
        List<BookInfo> list = bookInfoRepositories.findAll();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getBookId().equals(bookid)) {
                SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
                Date date1 = null;
                Date date2 = null;
                try {
                    date1 = format.parse(publishtime);
                    date2 = format.parse(inmysqlertime);
                    BookInfo book = new BookInfo();
                    book.setBookId(bookid);
                    book.setBookName(bookname);
                    book.setAuthor(bookauthor);
                    book.setTranslator(booktranslator);
                    book.setPrice(Float.valueOf(price));
                    book.setISBNCode(code);
                    book.setPublishCompany(publishplace);
                    book.setComeUpTime(date1);
                    book.setEnteringMen(inmysqler);
                    book.setEnteringDate(date2);
                    book.setState(Integer.valueOf(state));
                    this.bookInfoRepositories.saveAndFlush(book);
                    map.put("success", true);
                    return map;
                } catch (Exception e) {
                    e.printStackTrace();
                    map.put("success", false);
                }
            }
            else
                map.put("success", false);
        }
        return map;
        }

     //查阅借阅信息
     @GetMapping(value = "/searchrecords")
     public Map<String, Object> searchrecords(@RequestParam("inputinfo") String id ) {
         Map<String, Object> map = new HashMap<>();
         //针对学生，普通用户
//        List<UserInfo> list =  userInfoRepositories.findAll();
//        map.put("list", list);
         List<BorrowRecords> list =borrowRecordsRepositories.findAll();
         List<BookInfo> book =bookInfoRepositories.findAll();
         List<UserInfo> user =userInfoRepositories.findAll();
         List<BorrowRecords> target = new ArrayList<>();
         List<BookInfo> booktarget=new ArrayList<>();
         List<UserInfo> usertarget=new ArrayList<>();
         for(int i=0;i<list.size();i++){
              if(list.get(i).getBorrowId().equals(id)){
                  target.add(list.get(i));
                  map.put("borrowid",target);
                  map.put("showlist",true);
                  return map;
              }
          }
        for(int j=0;j<book.size();j++){
                  if(book.get(j).getBookId().equals(id)){
                      booktarget.add(book.get(j));
                      map.put("bookid",booktarget);
                      map.put("showbook",true);
                      return map;
                  }
                }

         for(int k=0;k<user.size();k++){
             if(user.get(k).getUserId().equals(id)){
                 usertarget.add(user.get(k));
                 map.put("userid",usertarget);
                 map.put("showuser",true);
                 return map;
             }
         }
         return map;
     }

    //查阅图书信息
    @GetMapping(value = "/searchbooks")
    public Map<String, Object> searchbooks(@RequestParam("inputinfo") String id ) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
//        List<UserInfo> list =  userInfoRepositories.findAll();
//        map.put("list", list);
        List<BookInfo> list =bookInfoRepositories.findAll();
        List<BookInfo> target = new ArrayList<>();
        for(int i=0;i<list.size();i++){
            if(list.get(i).getBookId().equals(id)){
                target.add(list.get(i));
            }
        }
        map.put("list",target);
        return map;
    }

    //管理员中心
    @GetMapping(value = "/managercenter")
    public Map<String, Object> managercenter(@RequestParam("adid") String adid,
                                              @RequestParam("adpass") String adpass,
                                              @RequestParam("adnewpass") String adnewpass,
                                              @RequestParam("againpass") String againpass,
                                              @RequestParam("admintel") String admintel,
                                              @RequestParam("adminemaile") String adminemaile) {
        Map<String, Object> map = new HashMap<>();
        //针对学生，普通用户
        List<BookAdmin> list = bookAdminRepositories.findAll();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getAdId().equals(adid)&&adnewpass.equals(againpass)&&list.get(i).getAdPassword().equals(adpass)) {
                try {
                    BookAdmin book = new BookAdmin();
                    book.setAdId(list.get(i).getAdId());
                    book.setAdName(list.get(i).getAdId());
                    book.setAdPassword(adnewpass);
                    book.setAdPhone(admintel);
                    book.setAdEmail(adminemaile);
                    this.bookAdminRepositories.saveAndFlush(book);
                    map.put("success", true);
                    return map;
                } catch (Exception e) {
                    e.printStackTrace();
                    map.put("success", false);
                }
            }
        }
        return map;
    }






}