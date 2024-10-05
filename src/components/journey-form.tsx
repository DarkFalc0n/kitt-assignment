'use client';
import { Button } from './ui/button';
import { ArrowLeftRight, LocateFixed, Search } from 'lucide-react';
import { airports } from '@/public/constants/airports';
import { useJourney } from '@/hooks';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ExtendedFC, TJourney } from '@/lib/types';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import SelectInput from './select-input';
import DatePickerInput from './datepicker-input';

const filterAirports = (query?: string) => {
  if (!query) return airports;
  return airports.filter(
    (airport) => !airport.code.toLowerCase().includes(query.toLowerCase())
  );
};

const journeyFormSchema = z
  .object({
    to: z.string().min(1),
    from: z.string().min(1),
    startDate: z.date(),
    endDate: z.date()
  })
  .refine((data) => data.startDate < data.endDate, {
    message: 'Start date must be before end date',
    path: ['startDate', 'endDate']
  });

const onSubmit = (data: TJourney) => {
  console.log('SUCCESS', data);
};

const JourneyForm: ExtendedFC = () => {
  const form = useForm<TJourney>({
    resolver: zodResolver(journeyFormSchema)
  });
  const { journey, handleChange, swapAirports } = useJourney();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-9"
      >
        <div className="flex w-full gap-6">
          <div className="flex gap-3">
            <FormField
              name="from"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SelectInput
                      onValueChange={(e) =>
                        handleChange({ ...journey, from: JSON.parse(e) })
                      }
                      placeholderIcon={<LocateFixed size={16} />}
                      placeholderText="Where from?"
                      valueLabel="Where from?"
                      value={journey.from?.name!}
                      options={filterAirports(journey.to?.code)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex flex-col justify-center">
              <Button
                variant="secondary"
                size="icon"
                className="self-start"
                onClick={(e) => {
                  e.preventDefault();
                  swapAirports(journey);
                }}
              >
                <ArrowLeftRight size={20} />
              </Button>
            </div>
            <FormField
              name="from"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SelectInput
                      onValueChange={(e) =>
                        handleChange({ ...journey, to: JSON.parse(e) })
                      }
                      placeholderIcon={<LocateFixed size={16} />}
                      placeholderText="Where to?"
                      valueLabel="Where to?"
                      value={journey.to?.name!}
                      options={filterAirports(journey.from?.code)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-3">
            <FormField
              name="startDate"
              control={form.control}
              render={() => (
                <DatePickerInput
                  className="w-[170px]"
                  placeholderText="Departure"
                  date={journey.startDate}
                  handleDateChange={(date) =>
                    handleChange({ ...journey, startDate: date })
                  }
                />
              )}
            />
            <FormField
              name="endDate"
              control={form.control}
              render={() => (
                <DatePickerInput
                  className="w-[170px]"
                  placeholderText="Return"
                  date={journey.endDate}
                  handleDateChange={(date) =>
                    handleChange({ ...journey, endDate: date })
                  }
                />
              )}
            />
          </div>
        </div>
        <Button
          name="submit"
          type="submit"
          size="xl"
          className="h-[48px] self-end"
          onClick={form.handleSubmit(onSubmit)}
        >
          <Search size={16} />
          <div className="text-button">Search flights</div>
        </Button>
      </form>
    </Form>
  );
};

export default JourneyForm;
