const wlogger = {
  log: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
  verbose: jest.fn(),
  error: jest.fn(),
};

jest.mock('winston', () => ({
  format: {
    json: jest.fn(),
    combine: jest.fn(),
    label: jest.fn(),
    timestamp: jest.fn(),
    errors: jest.fn(),
  },
  createLogger: jest.fn().mockReturnValue(wlogger),
  transports: {
    Console: jest.fn(),
  },
  addColors: jest.fn(),
}));

import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService, SupportedLoggedMethods } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService],
    }).compile();

    service = module.get<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const cases: SupportedLoggedMethods[] = [
    'info',
    'warn',
    'debug',
    'error',
    'verbose',
  ];

  describe('logger methods', () => {
    it.each(cases)('logger.%s(str) calls same winston method', (method) => {
      service?.[method]?.('log message');
      expect(wlogger[method]).toHaveBeenCalledTimes(1);
    });
  });

  describe('log with context', () => {
    it('should call winston loggger with context format', () => {
      const message = 'log message';
      const context = 'test';
      service.log(message, context);
      expect(wlogger.info).toHaveBeenCalledWith(`[${context}] ->`, { message });
    });
  });
});
