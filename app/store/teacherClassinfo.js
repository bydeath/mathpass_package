/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-10-3
 * Time: 下午12:17
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.store.teacherClassinfo',{
    extend:'Ext.data.Store',
    requires:[
        'MathPASS.model.teacherClassinfo'
    ],
    config:{
        model:'MathPASS.model.teacherClassinfo',
        autoLoaded:true,
        autoLoad: true,
        autoSave:true,
        storeId:'TeacherClassinfo'
    }
});