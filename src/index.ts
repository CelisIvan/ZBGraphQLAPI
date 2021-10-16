import {createConnection} from "typeorm"


const main = async () => {
    const conn = await createConnection();

    const app = express();
}
main().catch((err) =>{
    console.error(err);
});

function express() {
    throw new Error("Function not implemented.");
}
