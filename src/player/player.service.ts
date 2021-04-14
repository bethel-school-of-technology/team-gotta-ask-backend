import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './player.interface';
import { PlayerDTO } from './player.dto';

@Injectable()
export class PlayerService {
    constructor(@InjectModel('Player') private readonly playerModel: Model<Player>) { }

    // Fetch all players
    async getAllPlayer(): Promise<Player[]> {
        const players = await this.playerModel.find().exec();
        return players;
    }

    // Get a single player
    async getPlayer(playerId): Promise<Player> {
        const player = await this.playerModel.findById(playerId).exec();
        return player;
    }

    //Post a single player
    async addPlayer(playerDTO: PlayerDTO): Promise<Player> {
        const newPlayer = await new this.playerModel(playerDTO);
        return newPlayer.save();
    }

    //Edit player details
    async updatePlayer(playerId, playerDTO: PlayerDTO): Promise<Player> {
        const updatedPlayer = await this.playerModel.findByIdAndUpdate(playerId, playerDTO, { new: true });
        return updatedPlayer;
    }

    //Delete a player
    async deletePlayer(playerId): Promise<any> {
        const deletedPlayer = await this.playerModel.findByIdAndRemove(playerId);
        return deletedPlayer;
    }

    //Delete all player
    async deleteAllPlayers(): Promise<any> {
        const deletedPlayers = await this.playerModel.deleteMany();
        return deletedPlayers;
    }
}
