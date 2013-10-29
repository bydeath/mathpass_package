/**
 * Created with JetBrains WebStorm.
 * User: yangruiyang
 * Date: 13-10-3
 * Time: 下午12:19
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MathPASS.model.teacherClassinfo',{
    extend:'Ext.data.Model',
    requires:[
        'Ext.data.proxy.LocalStorage'
    ],
    config:{
        identifier: 'uuid',
        fields:[
            {name:'courseId',type:'int'},
            {name:'title',type:'string'},
            {name:'startDate',type:'date'},
            {name:'endDate',type:'date'},
            {name:'days',type:'string'}
        ],
        proxy:{
            type:'localstorage',
            id:'testTeacherClassinfo'
        }
    }
});