/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-9-25
 * Time: 上午1:16
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.controller.teacherpage',{
    extend:'Ext.app.Controller',
    requires:[
        'MathPASS.view.teacherpage',
        'MathPASS.store.userinfo',
        'MathPASS.model.userinfo',
        'MathPASS.view.contactus'
    ],
    config:{
        refs:{
            teacherpageview:'teacherpageview',
            checkClass:'#checkClass'
        },
        control:{
            checkClass:{
                tap:'btn_checkClass_ontap'
            }
        }
    },
    btn_checkClass_ontap:function(){
        var userId="";
        var classTitle=new Array();
        var classCourseId=new Array();
        var classStartDate=new Array();
        var classEndDate=new Array();
        var classDays=new Array();
        var q=0;
        var t=0;
        var r=0;
        var u=0;
        var p=0;
        var userInfoData=Ext.getStore('UserInfo');
        if(null!=userInfoData.getAt(0)){
             userId = userInfoData.getAt(0).get('userId');
        }
        Ext.Ajax.request({
            url:'http://202.201.13.85/mathpass/findcourses.php',
            params:{
                userId:userId
            },
            scope:this,
            success:function(response){
                var responseText = Ext.decode(response.responseText);
                if(responseText.success==true){
                    var resultdata = responseText.data;
                    for (var i in resultdata) {
                        for(var j in resultdata[i]){
                            if(j=='title'){
                                classTitle[q]=resultdata[i][j];
                                q++;
                            }else if(j=='courseId'){
                                classCourseId[t]=resultdata[i][j];
                                t++;
                            }else if(j=='startDate'){
                                classStartDate[r]=resultdata[i][j];
                                r++;
                            }else if(j=='endDate'){
                                classEndDate[u]=resultdata[i][j];
                                u++;
                            }else if(j=='days'){
                                classDays[p]=resultdata[i][j];
                                p++;
                            }
                        }
                    }
                    Ext.Viewport.animateActiveItem(Ext.getCmp("teacherShowClassesView"), { type: 'slide', direction: 'left'});
                }
                else{
                    Ext.Msg.alert('failure',responseText.message);
                }
            },
            failure:function(){
                Ext.Msg.alert('请求失败','AJAX请求发送失败!');
            }
        });
    }
});