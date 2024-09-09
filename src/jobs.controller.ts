import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { createJobDTO } from './create-job.dto';
import { JobService } from "./jobs.service";
import { JoiValidationPipe } from "./joi-validation.pipe";
import { createJobSchema } from "./create-job.schema";


@Controller("jobs")
export class JobController {
    constructor(private readonly jobsService: JobService) { }

    @Post()
    @UsePipes(new JoiValidationPipe(createJobSchema))
    createJob(@Body() createJobDTO: createJobDTO) {

        return this.jobsService.createJob(createJobDTO)
    }


}