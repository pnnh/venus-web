
import { RestfulAddress } from "@/utils/config";
import axios from "axios";
import { CommonReslut } from "./common-result";

export class PictureModel { 
    pk: string = "";
    title: string = "";
    description: string = "";
    createTime?: Date = new Date();
    updateTime?: Date = new Date();
    filePath: string = "";
}
 

export class selectResultModel {
    count: number = 0;
    list: PictureModel[] = [];
}

export async function selectPictureModels(page: number, size: number): Promise<selectResultModel> {


  var a: PictureModel = {
    pk: "a", title: "test", filePath: "/files/pictures/1.webp",
    description: "",
  }
  var b: PictureModel = {
    pk: "b", title: "test", filePath: "/files/pictures/2.webp",
    description: "",
  }
  var c: PictureModel = {
    pk: "c", title: "test", filePath: "/files/pictures/3.webp",
    description: "",
  }
  var models = [a, b, c];

  return {count: 3, list: models};


    let offset = (page - 1) * size;
    if (offset < 0) {
        offset = 0;
    }
    const response = await axios.get<CommonReslut<selectResultModel>>(RestfulAddress.PictureService + '/restful/picture/select',
        { params: { offset: offset, size: size } });
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
