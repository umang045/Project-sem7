import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getVargi } from "../feature/vargikrn/VargikrnSlice";

const useVargikrn = () => {
    const fetchVargi = useSelector(
        (state) => state?.vargikrn?.getVargi,
        shallowEqual
    );
    // console.log(fetchVargi);

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
    
    // console.log(Vrgidata);

    return {fetchVargi,Vrgidata};
};

export { useVargikrn }