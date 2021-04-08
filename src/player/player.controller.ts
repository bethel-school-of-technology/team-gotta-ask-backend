import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerDTO } from './player.dto';

@Controller('player')
export class PlayerController {
    constructor(private playerService: PlayerService) { }

    // Add a player
    @Post('/create')
    async addPlayer(@Res() Res, @Body() playerDTO: PlayerDTO) {
        const player = await this.playerService.addPlayer(playerDTO);
        return Res.status(HttpStatus.OK).json({
            message: "Player has been created successfully",
            player
        })
    }

    // Update a player's details
    @Put('/update/:playerId')
    async updatePlayer(@Res() res, @Param('playerId') playerId, @Body() playerDTO: PlayerDTO) {
        const player = await this.playerService.updatePlayer(playerId, playerDTO);
        if (!player) throw new NotFoundException('Player does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Player has been successfully updated',
            player
        });
    }

    // Delete a player
    @Delete('/delete/:playerId')
    async deletePlayer(@Res() res, @Param('playerId') playerId) {
        const player = await this.playerService.deletePlayer(playerId);
        if (!player) throw new NotFoundException('Player does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Player has been deleted',
            player
        })
    }

    //Retrieve player list
    @Get('/all')
        async getAllPlayer(@Res() res) {
            const players = await this.playerService.getAllPlayer();
            return res.status(HttpStatus.OK).json(players);
    }

    //Fetch a particular player using Id
    @Get('/:playerId')
    async getPlayer(@Res() res, @Param('playerId') playerId) {
        const player = await this.playerService.getPlayer(playerId);
        if (!player) throw new NotFoundException('Player does not exist!');
        return res.status(HttpStatus.OK).json(player);
    }

}
