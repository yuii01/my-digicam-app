import * as FileSystem from "expo-file-system";

const PHOTO_DIR = FileSystem.documentDirectory + "/photos";

export async function savePhoto(uri, filename){
    const path = PHOTO_DIR + filename;
    

}

export async function deletePhoto(filename){
    const path = PHOTO_DIR + filename;
    await FileSystem.deleteAsync(path);
}

export async function downloadPhoto(filename){
    
}

export async function importPhoto(){

}

export async function exportPhoto(){

}