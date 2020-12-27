import {nanoid} from 'nanoid';

function Course(id,{
        courseName,category,price,language,email,stack, teachingAssists
    }){
        this.id =id;
        this.courseName = courseName;
        this.category = category;
        this.price = price;
        this.language = language;
        this.email = email;
        this.stack =stack;
        this.teachingAssists = teachingAssists
    }



const courseholder = []
const teacher =[]

const resolvers = {
    getCourse : ({id}) => {
        return courseholder.find(c => c.id==id)
    },
    getTeachingAssists : ({id}) =>{
        return teacher.find(t=>t.id==id)
    },
    createCourse: ({input}) => {
        let id =nanoid();
        let newc = new Course(id,input);
        courseholder.push(newc);
        teacher.push({id,firstName:input.firstname})
        console.log(newc);
        return  newc
    },
    createTeacher:({input}) =>{
        let id =nanoid();
        teacher.push({id,firstName:input.firstName});
        console.log(teacher);
        return {id,firstName:input.firstName};
    }
}


export default resolvers;


