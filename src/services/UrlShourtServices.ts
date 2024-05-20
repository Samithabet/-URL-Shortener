import { PrismaClient } from '@prisma/client';
import shortlink from 'shortlink';
import { DatabaseError } from '../errors/DatabaseError';
import { NotFoundError } from '../errors/NotFoundError';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

class UrlShourtServices {
    public async CreateUrlShort(data: any) {
        
        try {
          const urlData = await prisma.urlShourt.create({
            data: {
              ...data,
              shortUrl:shortlink.generate(8)
            },
          })
          return urlData
     
          } catch (error) {
            throw new DatabaseError('Failed to create short URL', error);
          } 
    }
    public async getUrlShortById(id: any) {
      try {
        const urlData = await prisma.urlShourt.findUnique({
          where: { id: id }
        });
    
        if (!urlData) {
          throw new NotFoundError(`Url with this id ${id} not found`);
        }
    
        await prisma.urlShourt.update({
          where: { id: id },
          data: { noOfClike: urlData.noOfClike + 1 }
        });
    
        return urlData;
      } catch (error) {
        throw new DatabaseError('Failed to create short URL', error);
      }
    }
    
}

export default new UrlShourtServices();
