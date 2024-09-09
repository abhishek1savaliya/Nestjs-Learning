import { Injectable } from '@nestjs/common';
import { createJobDTO } from './create-job.dto';

@Injectable()
export class JobService {
    createJob(job: createJobDTO) {

    }
}
