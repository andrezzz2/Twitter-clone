import { v4 as uuidv4 } from 'uuid';

export class User{

    public readonly id!: string;
    
    public firstName!: string;
    public lastName!: string;
    public username!: string;
    public email!: string;
    public password!: string;
    public photoURL!: string;
    public bio!: string;

    //2 parametros, props que é do tipo User mas omitindo id, photoURL e bio, e o parametro id que é opcional e do tipo string
    constructor(props: Omit <Omit <Omit <User, 'id'>, 'photoURL'>, 'bio'>, id?: string){
        Object.assign(this, props)

        //objeto sendo criado
        if(!id){
            this.id = uuidv4();
            this.bio = "";
            this.photoURL = "";
        }
        
    }

}