
import { RestfulAddress } from "@/utils/config";
import axios from "axios";
import { CommonReslut } from "./common-result";

export class PictureModel { 
    pk: string = "";
    title: string = "";
    description: string = "";
    createTime?: Date = new Date();
    updateTime?: Date = new Date();
    file: string = "";
}
 

export class selectResultModel {
    count: number = 0;
    list: PictureModel[] = [];
}

export async function selectPictureModels(page: number, size: number): Promise<selectResultModel> {
    let offset = (page - 1) * size;
    if (offset < 0) {
        offset = 0;
    }
    const response = await axios.get<CommonReslut<selectResultModel>>(RestfulAddress.PictureService + '/restful/picture/select',
        { params: { offset: offset, limit: size } });
    return response.data.data;
}

export async function getPictureModel(pk: string): Promise<PictureModel> {
    const response = await axios.get<CommonReslut<PictureModel>>(RestfulAddress.PictureService + '/restful/picture/get', { params: { pk: pk } });
    return response.data.data;
}

export class TocItem {
    title: string = "";
    header: number = 0;
}
