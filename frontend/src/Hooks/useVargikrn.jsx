import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllVrgi, getVargi } from "../feature/vargikrn/VargikrnSlice";

const useVargikrn = () => {
    const dispatch = useDispatch();
    const fetchVargi = useSelector(
        (state) => state?.vargikrn?.getVargi,
        shallowEqual
    );
    useEffect(() => {
        dispatch(getAllVrgi());
    }, [getAllVrgi, dispatch]);
    // const data = dispatch(getAllVrgi)
    const fetchAllVargi = useSelector(
        (state) => state?.vargikrn?.getAllVrgi,
        shallowEqual
    );
    // console.log(fetchAllVargi);

    let Vrgidata = [];
    if (fetchVargi !== 'undefined') {
        // console.log('hello');
        let cnt = 0;
        fetchVargi?.map((item, i) => {
            for (let index = 0; index < item?.માહીતી?.length; index++) {
                // const element = array[index];
                item?.માહીતી[index].floor[0]?.info.map((itm, idx) => {
                    console.log(itm?.area);
                    Vrgidata.push({
                        ix: ++cnt,
                        idxx: `${itm?.index}`,
                        name: `${itm?.name}`,
                        area: `${itm?.area}`,
                        cost: `${itm?.cost}`,
                        year: `${itm?.year}`,
                    })
                })
            }
        })
    }

    let AllDt = [];
    let cnt = 0;
    fetchAllVargi?.map((item, i) => {
        // console.log(item);
        let kname = item?.kacheriId?.ક્ચેરી‌નુ‌નામ
        let vname = item?.vibhagId?.વિભાગ‌નુ‌નામ
        for (let index = 0; index < item?.માહીતી?.length; index++) {
            item?.માહીતી[index].floor[0]?.info.map((itm, idx) => {
                // console.log(itm);
                AllDt.push({
                    ix: ++cnt,
                    knm: `${kname}`,
                    vnm: `${vname}`,
                    idxx: `${itm?.index}`,
                    name: `${itm?.name}`,
                    area: `${itm?.area}`,
                    cost: `${itm?.cost}`,
                    year: `${itm?.year}`,
                })
            })
        }
    })
    // console.log(AllDt);  
    

    return { fetchVargi, Vrgidata ,AllDt };
};

export { useVargikrn }