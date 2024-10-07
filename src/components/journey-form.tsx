'use client';
import { Button } from './ui/button';
import { ArrowLeftRight, LocateFixed, Search } from 'lucide-react';
import { airports } from '@/public/constants/airports';
import { useJourney } from '@/hooks';
import { z } from 'zod';
import { ExtendedFC, TAirPort } from '@/lib/types';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SelectInput from './select-input';
import DatePickerInput from './datepicker-input';
import { JourneySchema } from '@/lib/schema';
import { useRouter } from 'next/navigation';

const filterAirports = (query?: string) => {
  if (!query) return airports;
  return airports.filter(
    (airport) => !airport.code.toLowerCase().includes(query.toLowerCase())
  );
};

const JourneyForm: ExtendedFC = () => {
  const form = useForm<z.infer<typeof JourneySchema>>({
    resolver: zodResolver(JourneySchema)
  });
  const router = useRouter();

  const onSubmit = () => {
    router.push('/flights');
  };
  const { journey, setJourney, swapAirports } = useJourney();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-9"
      >
        {' '}
        <div className="flex w-full gap-6">
          <div className="flex gap-3">
            <FormField
              name="from"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <SelectInput
                    options={filterAirports(journey?.to?.code)}
                    placeholderIcon={<LocateFixed />}
                    placeholderText="Where from"
                    value={journey.from}
                    valueLabel="Where from"
                    name="from"
                    onValueChange={(code) => {
                      const airport = JSON.parse(code) as TAirPort;
                      setJourney({
                        ...journey,
                        from: airport
                      });
                      field.onChange(airport);
                    }}
                  />
                  <FormMessage />
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
                  swapAirports();
                }}
              >
                <ArrowLeftRight size={20} />
              </Button>
            </div>
            <FormField
              name="to"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <SelectInput
                    options={filterAirports(journey?.from?.code)}
                    placeholderIcon={<LocateFixed />}
                    placeholderText="Where to"
                    value={journey.to}
                    valueLabel="Where to"
                    onValueChange={(code) => {
                      const airport = JSON.parse(code) as TAirPort;
                      setJourney({
                        ...journey,
                        to: airport
                      });
                      field.onChange(airport);
                    }}
                    name="to"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-3">
            <FormField
              name="startDate"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <DatePickerInput
                      value={journey.startDate}
                      onDateChange={(value) => {
                        setJourney({
                          ...journey,
                          startDate: value!
                        });
                        field.onChange(value);
                      }}
                      placeholderText="Departure"
                    />
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="endDate"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <DatePickerInput
                      value={journey.endDate}
                      onDateChange={(value) => {
                        setJourney({
                          ...journey,
                          endDate: value!
                        });
                        field.onChange(value);
                      }}
                      placeholderText="Return"
                    />
                    <FormMessage />
                  </FormItem>
                );
              }}
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
