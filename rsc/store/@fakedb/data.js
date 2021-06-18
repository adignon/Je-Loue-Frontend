import {generateFakeDatas, generateMultipleFakeData} from "./formatGenerator"
import * as Format from "./format";

export const Category=generateFakeDatas(Format.CategoryFormat());
export const Categories=generateMultipleFakeData(Format.CategoryFormat(), 5)
export const RoomAttribute=generateFakeDatas(Format.RoomAttributeFormat());
export const RoomAttributes=generateMultipleFakeData(Format.RoomAttributeFormat(),10);